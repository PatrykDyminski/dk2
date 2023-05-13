export interface BlogPostCardProps {
  title: string;
  date: Date;
  author: string;
  description: string;
}

export default function BlogPostCard(params: BlogPostCardProps) {

  return (

    <div
      tabindex="0"
      class="max-w-lg rounded overflow-hidden shadow-lg cursor-pointer"
      aria-label="card 1"
    >
      <img
        role="img"
        aria-label="code editor"
        tabindex="0"
        src="/placeholder-hero.jpg"
        alt="code editor"
      />
      <div class="p-4 w-full flex justify-between bg-black">
        <p
          tabindex="0"
          class="text-sm text-white font-semibold tracking-wide"
        >
          {params.author}
        </p>
        <p
          tabindex="0"
          class="text-sm text-white font-semibold tracking-wide"
        >
          {params.date}
        </p>
      </div>
      <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded">
        <h1 tabindex="0" class="text-4xl font-semibold tracking-wider">
          {params.title}
        </h1>
        <p tabindex="0"
          class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
        >
          {params.description}
        </p>
        <div class="w-full flex justify-end">
          <button
            class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer"
          >
            <span class="text-base tracking-wide">Czytaj dalej</span>
          </button>
        </div>
      </div>
    </div>
  )
}