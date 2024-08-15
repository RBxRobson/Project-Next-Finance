import { HeroSecurity, HowProtect } from '../../components/organisms'
import { useGetSecurityQuery } from '../../services/api'

const Security = () => {
  const { data: security } = useGetSecurityQuery()

  if (!security) {
    return <h3>Carregando...</h3>
  }

  const { hero: heroData, how_we_protect: howProtectData } = security

  return (
    <>
      <HeroSecurity heroData={heroData} />
      <HowProtect howProtectData={howProtectData} />
    </>
  )
}

export default Security