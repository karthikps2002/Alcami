// Load header and dispatch custom event
fetch("header.html")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load header.html");
    return response.text();
  })
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
    window.dispatchEvent(new Event('headerLoaded'));
  })
  .catch((error) => console.error("Header Load Error:", error));

// Load homepage
fetch("home.html")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load home.html");
    return response.text();
  })
  .then((data) => {
    document.getElementById("homepage-container").innerHTML = data;
  })
  .catch((error) => console.error("Home Load Error:", error));

// Load footer
fetch("footer.html")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load footer.html");
    return response.text();
  })
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((error) => console.error("Footer Load Error:", error));
