import { expect, test } from "@playwright/test";
test.describe.parallel("List Users API request", () => {
  test.skip("get request - assert status for invalid end-point", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get(`${baseURL}/api/usersss?page=1`);
    expect(response.status()).toBe(404);
  });
  test("get request - assert status for valid end-point", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get(`${baseURL}/api/users?page=1`);
    expect(response.status()).toBe(200);
  });
  test("get request - assert list user data", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/api/users?page=2`);
    const responseBody = JSON.parse(await response.text());
    expect(await responseBody.page).toBe(2);
    expect(await responseBody.per_page).toBe(6);
    expect(await responseBody.total).toBe(12);
    expect(await responseBody.total_pages).toBe(2);
  });
});
