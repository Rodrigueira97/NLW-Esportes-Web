import { CreateAdBanner } from './components/CreateAdBanner'
import { GamerBanner } from './components/GamerBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'


import "./styles/main.css"
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'


interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number;
  }
}

export function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:5555/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src="./public/logo.svg" alt="logo da NLW esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16 w-4/5">

        {games.map(game => {
          return (
            <GamerBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads} />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner title='Não encontrou seu duo' subtitle='Publique um anúncio para encontrar novos players!' />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

//38:00

