import ImageGrid from "./ImageGrid";

export default function Home() {
    return (
      <div className="container  max-w-6xl mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto mt-10 flex flex-col">
            <h2 className="hidden sm:block text-4xl pb-2">Gallery</h2>
            <img src="/divider.png" width="200" alt="" className="pt-2 mb-5" />
        </div>
          
        <ImageGrid/>
      </div>
    );
  }