// Parallelism

// Vitest runs test files in parallel across multiple worker threads. This can speed up test execution, especially for large test suites. However, it also means that tests should be designed to be independent and not rely on shared state or resources that could lead to race conditions.

import { describe, test, expect } from "vitest";

const fetcUser = async (id: number) => {
  return new Promise<{ name: string }>((resolve) => {
    setTimeout(() => {
      resolve({ name: "Jose" });
    }, 1000);
  });
};

const fetchPosts = async () => {
  return new Promise<Array<{ id: number; title: string;}>>((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" },
            { id: 3, title: "Post 3" },
        ]);
    }, 1000);
  });
};

describe("Parallelism Example", () => {
  test.concurrent("Fetches user profile", async () => {
    const user = await fetcUser(1);
    expect(user.name).toBe("Jose");
  });

  test.concurrent("Fetches user post", async() => {
    const posts = await fetchPosts(1);
    expect(posts).toHaveLength(3);
  });
});
