"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


const Page = () => {
  return (
    <div className=' container mx-auto h-screen text-xs bg-gradient-to-b from-pink-300 to-pink-200 sm:text-lg'>
      <Header />
      <div>
        <label>
          <div className='centraliza_texto'>
            Em conformidade com a lei LGPD 13.709/2019, não utilizamos os dados solicitados, para ceder ou vender
            informações de contatos de pacientes, bem como de seus acompanhantes, ou de qualquer outra pessoa que
            utilize dos nossos serviços, para divulgação de produtos e/ou serviços por telemarketing ou outros meios
            utilizado para menssagens.<br />
            Os dados solicitados são extremamente para fins de controladoria dos serviços prestados e monitoramento da
            gestão e qualidade de nossos serviços. Solicitamos a manifestação livre, explícita e inequivoca do titular
            concordando com o tratamento de seus dados pessoais para essa finalidade específica.
          </div>
        </label>
      </div>
      <Footer />
    </div>

  )
}

export default Page