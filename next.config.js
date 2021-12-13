module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // matching all API routes
        source: "/assets/webgl/:path*",
        destination: "https://d3dgnplrqmrl5m.cloudfront.net/:path*",
      }
    ]
  }
}
