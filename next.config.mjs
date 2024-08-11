/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
      ignoreBuildErrors:true,
    },
    images: {
        domains: ['images.unsplash.com','aceternity.com',"assets.aceternity.com","thumbs2.imgbox.com"],
    },
 



};

export default nextConfig;
