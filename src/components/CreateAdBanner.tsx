import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'


interface CreateAdBannerProps {
    title: string,
    subtitle: string,
};


export function CreateAdBanner(props: CreateAdBannerProps) {


    return (
        <div className="pt-1 w-4/5 mx-auto bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2A2634] py-6 px-8 flex justify-between items-center">

                <div>

                    <strong className="block text-white text-2xl font-black">{props.title}</strong>
                    <span className="text-zinc-400">{props.subtitle}</span>
                </div>

                <Dialog.Trigger className="py-3 px-4  bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>

            </div>

        </div>
    )
}