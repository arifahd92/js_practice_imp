// Simulated async functions

/*
Scenario

Interview Story:
"We had a real-time API where step one was validating a user token. As soon as it was valid, we had to respond immediately to the client for speed. But we also needed to fetch additional data and log analytics in the background without delaying the main response."
*/
function validateToken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Token validated");
      resolve("user-123");
    }, 500);
  });
}

function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📄 Fetched profile for ${userId}`);
      resolve({ id: userId, name: "Alice", role: "Admin" });
    }, 1000);
  });
}

function logAnalytics(userProfile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📊 Logged analytics for ${userProfile.name}`);
      resolve(true);
    }, 700);
  });
}

async function handleRequestSequential() {
  try {
    const userId = await validateToken();
    const profile = await fetchUserProfile(userId);
    const analytics = await logAnalytics(profile);

    return { success: true, userId, analytics };
  } catch (err) {
    console.error("❌ Request failed:", err);
    return { success: false };
  }
}

(async () => {
  console.log("▶ Sequential version start");
  const res = await handleRequestSequential();
  console.log("📢 Final API response:", res);
})();

// Main function
async function handleRequest() {
  try {
    // Step 1: Must complete before responding
    const userId = await validateToken();

    // Fire-and-forget background process
    (async () => {
      try {
        const profile = await fetchUserProfile(userId);
        await logAnalytics(profile);
      } catch (bgError) {
        console.error("❌ Background process failed:", bgError);
      }
    })();

    // Respond immediately after step 1
    return { success: true, userId };
  } catch (err) {
    console.error("❌ Token validation failed:", err);
    return { success: false };
  }
}

// Simulate API call
(async () => {
  const response = await handleRequest();
  console.log("📢 Immediate API response:", response);
})();
