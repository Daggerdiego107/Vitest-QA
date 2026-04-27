import {
  describe,
  expect,
  test,
  afterEach,
  beforeEach,
  beforeAll,
  afterAll
} from "vitest";

let db;

const connectToDatabase = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Connected to Database");
    }, 1000);
  });
};

describe("Tests afterall and before all", () => {
  beforeAll(async () => {
    db = await connectToDatabase();
  });

  afterAll(async () => {
    await db.close();
  });

  test("Can query users", async() => {
    const users = await db.query("SELECT * FROM users");
    expect(users.length).toBeGreaterThan(0);
  });

  test("Can query products", async() => {
    const products = await db.query("SELECT * FROM products");
    expect(products.length).toBeGreaterThan(0);
  });
});

describe.skip("Setup and TearDown Examples", () => {
  let items: string[];
  beforeEach(() => {
    items = ["item1", "item2", "item3"];
  });

  afterEach(() => {
    items = [];
  });

  test("Should run before each test", () => {
    expect(items).toHaveLength(3);
  });

  test("Should add an item", () => {
    items.push("item4");
    expect(items).toHaveLength(4);
  });
});
