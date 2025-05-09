class GtelPortalService {
  constructor() {
  }
  getCurrentUser(accessToken) {
    return fetch("/api/gtelportal/getcurrentuser", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        // Include the Bearer token
        "Content-Type": "application/json"
        // Specify the content type, if needed
      }
    });
  }
}
export {
  GtelPortalService
};
//# sourceMappingURL=gtelPortal.service.js.map
