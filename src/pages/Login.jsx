export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 font-shojumaru text-pink-300">Login</h1>

            <form className="flex flex-col gap-4">
                <input type="email" placeholder="E-mail" className="border rounded-xl px-4 py-6" />

                <input type="passoword" placeholder="Senha" className="border rounded-xl px-4 py-6"/>

                <button type="submit" className="bg-pink-300 text-white rounded-4xl py-4 ">Login</button> 


            </form>
        </>
    )
}