export default function Login() {
    return (
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm py-20 px-16 rounded-2xl bg-[url('/fitness_bg.png')]">
            <h1 className="text-center mx-auto w-fit text-white text-2xl md:text-3xl lg:text-4xl py-5">Sign Up</h1>
            <form className="grid grid-cols-2 gap-8 max-w-[70%] my-5 mx-auto" action="submit" method="POST">
                <input type="text" placeholder="Username" required className="rounded-full px-4 py-4 w-full bg-transparent glass" />
                <input type="text" placeholder="Your Email" required className="rounded-full px-4 py-4 w-full bg-transparent glass" />
                <input type="text" placeholder="Your Password" required className="rounded-full px-4 py-4 w-full bg-transparent glass" />
                <input type="text" placeholder="Confirm password" required className="rounded-full px-4 py-4 w-full bg-transparent glass" />
            </form>
            <div class="grid place-items-center mt-12">
                <button className="px-10 py-4 bg-secondary rounded-full text-white">Submit</button>
            </div>
        </div>
    );
}