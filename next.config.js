/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com']
  },
  env:{
    mapbox_key:"pk.eyJ1IjoiYWxhbWdpcmhvc3NhbiIsImEiOiJjbGZ5eWxwanAwdzUyM2ZxeTJpYjZ6ajU5In0.H1BSnWyH4FLFlWkkqiHFpg"
  }
}

module.exports = nextConfig
