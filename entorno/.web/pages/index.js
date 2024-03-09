/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { CloudIcon as LucideCloudIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextHead from "next/head"



export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesFlex css={{"height": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesHeading>
  {`Pronóstico del clima`}
</RadixThemesHeading>
  <LucideCloudIcon css={{"color": "var(--current-color)"}}/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`Ciudad: Salta capital`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Temperatura: 22`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Humedad: 94`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Descripción: Partly cloudy`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Presión: 1014`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
