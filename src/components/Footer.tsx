import { EMAIL } from "../consts";

export default function Footer() {
  return (
    <footer class="border-t border-accent-2 sticky top-[100vh]">
      <div class="container mx-auto px-5">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left lg:my-5 lg:w-1/2">
            <a href="https://www.facebook.com/DrogaKrolow">
              <h3 class="cursor-pointer hover:text-blue-600 my-2 lg:my-0">facebook.com/DrogaKrolow</h3>
            </a>
            <h3 class="my-2 lg:my-0">{EMAIL}</h3>
          </div>
          <h3 class="text-2xl lg:text-5xl font-bold tracking-tighter leading-tight text-center my-2 lg:my-5 lg:w-1/2">
            #DK.PL
          </h3>
          <div class="text-md lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left lg:my-5 lg:w-1/2">
            <h3 class="my-2 lg:my-0">Brandon Sanderson</h3>
            <h3 class="my-2 lg:my-0">Cosmere</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};