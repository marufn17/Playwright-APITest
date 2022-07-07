import { expect, test } from "@playwright/test";
test.describe("Single User API Request", () => {
  test("get request - assert status for invalid end-point", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get(`${baseURL}/api/users/non`);
    expect(response.status()).toBe(404);
  });
  test.only("get request - assert status for valid end-point", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get(`${baseURL}/api/users/1`);
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.email).toBe("george.bluth@reqres.in");
    expect(responseBody.data.first_name).toBe("George");
    expect(responseBody.data.last_name).toBe("Bluth");
    expect(responseBody.data.avatar).toBe(
      "https://reqres.in/img/faces/1-image.jpg"
    );
  });
});
