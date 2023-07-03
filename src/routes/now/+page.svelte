<script>
	import { onMount } from "svelte";
    let time = new Date().toLocaleTimeString();
    onMount(() => {
        setInterval(() => {
            time = new Date().toLocaleTimeString();
        }, 1000);
    });
</script>
<main>
    <!-- centered vertically and horizontally tailwind hello on page -->
    <div class="flex h-screen bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
        <div class="m-auto focus:backdrop-blur-md">
            <h1 class="text-4xl text-stone-800 font-bold text-center font-jost hover:text-white">Little brown fox 
                <span class="text-red-500 hover:text-[#ff0000]">jumps over</span> the lazy dog
            </h1>
            <h1 class="my-2 text-4xl font-bold text-center font-poppins">{time}</h1>

        <p class="mt-2 text-center blur-sm font-robot font-light text-stone-600 hover:blur-none">Hope You are haveing a good time ⏰⏳</p>
        </div>
    </div>
    <!-- footer with absolute position -->
    <footer class="absolute bottom-4 w-full">
        <div class="flex justify-center">
            <div class="m-auto">
                <a href="https://yogpanjarale.com" target="_blank" rel="noopener noreferrer"class="text-center text-lg font-robot text-stone-700 hover:text-black">YogPanjarale@2023</a>
            </div>
        </div>
    </footer>
</main>