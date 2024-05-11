<script lang="ts">
  import '../app.scss'
  import icon from '$lib/assets/icon.png'
  import timesIcon from '$lib/assets/xmark-solid.svg'
  import barsIcon from '$lib/assets/bars-solid.svg'
  import { base } from '$app/paths'
  import { navigating } from '$app/stores'

  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const menuEffect: Function = (element: HTMLElement, intervalTime: number) => {
    element.onmouseover = (event: Event) => {
        let iterations: number = 0

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations+1) {
                    return event.target.dataset.value[index]
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")

            if(iterations >= event.target.dataset.value.length) clearInterval(interval)

            iterations += 1 / 3
        }, intervalTime)
    }
  }

  let checked: boolean

  const closeCheckBox: Function = () => {
    checked ? checked = false : true
  }

  $: if($navigating) closeCheckBox()

  const home: string = base + '/'
  const about: string = base + '/about' 
  const contact: string = base + '/contact'
  const services: string = base + '/services'
  const locations: string = base + '/locations'

  const copyright: string = `\u00A9 ${new Date().getFullYear()} ALEX FRISØR HAGOS AS` 
</script>

<svelte:head>
  <meta name="google-site-verification" content="VSgLH2cb_vLXqlGC7dA2zyafU-AvTltrHtxnsXMeYSk" />
  <meta property="og:url" content="https://aleksfrisor.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="ALEX FRISØR HAGOS AS">
  <meta property="og:description" content="The ALEX FRISØR HAGOS AS">
  <meta property="og:image" content={icon}>
</svelte:head>

<header>
  <nav>
    <ul class="nav-bar">
     <li class="logo"><a href={home}><img src={icon} alt="logo"></a></li>
      <input type="checkbox" id="check" bind:checked>
      <span class="menu">
        <li><a use:menuEffect={52} href={home} class="home" data-value="Meny">Meny</a></li>
        <li><a use:menuEffect={26} href={services} class="services" data-value="Tjenester">Tjenester</a></li>
        <li><a use:menuEffect={23} href={locations} class="locations" data-value="Lokasjon">Lokasjon</a></li>
        <li><a use:menuEffect={30} href={contact} class="contact" data-value="Kontakt">Kontakt</a></li>
        <li><a use:menuEffect={42} href={about} class="about" data-value="Om Oss">Om Oss</a></li>
        <label for="check" class="close-menu"><img src={timesIcon} alt="Close menu"></label>
      </span>
      <label for="check" class="open-menu"><img src={barsIcon} alt="Open menu"></label>
    </ul>
  </nav>
</header>

<slot />

<div class="wave wave1"></div>
<div class="wave wave2"></div>
<div class="wave wave3"></div>
<div class="copyright">{copyright}</div>
