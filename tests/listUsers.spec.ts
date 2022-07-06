import { expect, test, request } from "@playwright/test";
test.describe.parallel("List Users API request", () => {
  const baseUrl = "https://reqres.in";
  test("assert status for invalid end-point", async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users/non`);
    await expect(response.status()).toBe(404);
  });
  test("assert status for valid end-point", async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users?page=2`);
    await expect(response.status()).toBe(200);
  });
  test("assert user data", async ({ request }) => {});
});
