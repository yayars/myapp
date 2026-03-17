export default function Cadastro() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 font-shojumaru text-pink-700" >Cadastro</h1>

            <form className="flex flex-col gap-4">
                <input type="name" placeholder="Nome Completo" className="border rounded-xl px-4 py-6" />

                <input type="email" placeholder="Email" className="border rounded-xl px-4 py-6"/>

                <input type="passoword" placeholder="Senha" className="border rounded-xl px-4 py-6"/>

                <button type="submit" className="bg-pink-700 text-white rounded-4xl py-4">Cadastrar</button> 


            </form>
        </>
    )
}