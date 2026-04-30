import { http, HttpResponse, graphql, passthrough } from "msw";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    //console.log("request", request);
    return HttpResponse.json({
      id: "abc123",
      firstName: "Juan de Dios",
      lastName: "De la Torre",
    });
  }),
  http.get("https://api.example.com/hello", ({ request }) => {
    console.log("hello request: ", request);
  }),
  http.get<{ id?: string }>("/books/:id", ({ params }) => {
    if (params.id === "abc123") {
        return new HttpResponse( {error: "Unauthorized access"}, {status:404})
    }
    return HttpResponse.json({
        id: params.id,
        title: "The Lord of The Rings",
    });
  })
  ,
  graphql.query("ListMovies", () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: "Harry Potter",
          },
          {
            title: "Star Wars: The Empire Strikes Back",
          },
        ],
      },
    });
  }),
  http.get("/resource", async ({ request }) => {
    const data = await request.clone().json();
    if (data?.id === "abc123") {
      return HttpResponse.json({ id: "abc123" });
    }
    return passthrough();
  }),
  http.get("/api/user", ({ cookies }) => {
    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 403 });
    }
    return HttpResponse.json({ name: "John" });
  }),
];
