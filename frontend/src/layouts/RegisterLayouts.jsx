import Navbar from "../components/organisems/Navbar";

function RegsiterLayouts() {
    return (
        <>
            <Navbar />
            <div class="font-sans text-blue-900">
                <div class="flex flex-col md:flex-row m-auto">
                    <div class="flex-1 md:w-1/2 px-14 mt-5 mb-10 mb:mr-12">
                        <h1 class="text-6xl font-bold mb-5">Welcome on board!</h1>
                        <p class="text-sm">Welcome to your account</p>
                    </div>

                    <div
                        class="md:w-3/4 p-8 md:p-20 bg-green-100 items-center justify-center h-max md:h-screen"
                    >
                        <form
                            action="#"
                            method="post"
                            class="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <h1 class="text-3xl font-bold mb-8 md:col-span-2">
                                Create my account
                            </h1>

                            <div class="mb-4">
                                <label for="f-name" class="block text-xs font-medium">FIRST NAME</label>
                                <input
                                    type="text"
                                    id="f-name"
                                    name="f-name"
                                    class="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label for="l-name" class="block text-xs font-medium">LAST NAME</label>
                                <input
                                    type="text"
                                    id="l-name"
                                    name="l-name"
                                    class="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label for="e-mail" class="block text-xs font-medium">E-MAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="e-mail"
                                    name="e-mail"
                                    class="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label for="phone" class="block text-xs font-medium">PHONE</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    class="mt-1 p-2 w-full border border-blue-900"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="password" class="block text-xs font-medium">PASSWORD</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Minimum 8 characters"
                                    class="mt-1 p-2 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label for="confirmpass" class="block text-xs font-medium">CONFIRM PASSWORD</label>
                                <input
                                    type="password"
                                    id="confirmpass"
                                    name="confirmpass"
                                    placeholder="Confirm your password"
                                    class="mt-1 p-2 mb-10 w-full border border-blue-900"
                                    required
                                />
                            </div>

                            <div class="md:col-span-2">
                                <button
                                    type="submit"
                                    class="text-white bg-blue-900 px-7 py-2 font-bold"
                                >
                                    <p>CREATE A NEW ACCOUNT</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegsiterLayouts;