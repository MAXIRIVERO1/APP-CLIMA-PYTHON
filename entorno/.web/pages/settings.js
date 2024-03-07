/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Code as RadixThemesCode, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Select as RadixThemesSelect, Switch as RadixThemesSwitch, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_b78b7a058624ab585625df054ae8da47 () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/settings`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/settings")) || ((((state.router.page.path) === ("/")) && ("Settings")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Settings`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

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

export function Fragment_7a8c36e959b4ac274c12cd473cdf7412 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <Fragment>
  {isTrue(((colorMode) === ("light"))) ? (
  <Fragment>
  <img css={{"height": "2em"}} src={`/reflex_black.svg`}/>
</Fragment>
) : (
  <Fragment>
  <img css={{"height": "2em"}} src={`/reflex_white.svg`}/>
</Fragment>
)}
</Fragment>
  )
}

export function Theme_6ec0010d93e9af15e92bc9e6d0bbaea0 () {
  const state__theme_state = useContext(StateContexts.state__theme_state)


  return (
    <RadixThemesTheme accentColor={state__theme_state.accent_color} css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>
  <RadixThemesFlex align={`start`} css={{"transition": "left 0.5s, width 0.5s", "position": "relative"}} direction={`row`} gap={`2`}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "block"}, "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid var(--accent-12)"}}>
  <RadixThemesFlex align={`start`} css={{"height": "100dvh"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "borderBottom": "1px solid var(--accent-12)", "padding": "1em"}} direction={`row`} gap={`2`}>
  <Fragment_7a8c36e959b4ac274c12cd473cdf7412/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true}>
  <NextLink href={`https://github.com/reflex-dev/reflex`} passHref={true}>
  <RadixThemesFlex css={{"boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "background": "transparent", "borderRadius": "0.375rem", "&:hover": {"background": "var(--accent-1)"}, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <img css={{"height": "3em", "padding": "0.5em"}} src={`/github.svg`}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "overflowY": "auto", "alignItems": "flex-start", "padding": "1em"}} direction={`column`} gap={`2`}>
  <Link_97e05143123d6b32b753a76522f5f1bb/>
  <Link_be14b499d5139557daf41bf5bb5f5928/>
  <Link_b78b7a058624ab585625df054ae8da47/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "borderTop": "1px solid var(--accent-12)", "padding": "1em"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true} css={{"color": "var(--accent-10)", "textDecoration": "none", "&:hover": {"color": "var(--accent-10)"}}}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`Docs`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "var(--accent-10)", "textDecoration": "none", "&:hover": {"color": "var(--accent-10)"}}}>
  <NextLink href={`https://reflex.dev/blog/`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`Blog`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"paddingTop": "5em", "@media screen and (min-width: 0)": {"paddingInlineStart": "auto", "paddingInlineEnd": "auto"}, "@media screen and (min-width: 30em)": {"paddingInlineStart": "2em", "paddingInlineEnd": "2em"}, "flex": "1"}}>
  <RadixThemesBox css={{"alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`8`}>
  {`Settings`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Dark mode: `}
</RadixThemesText>
  <Switch_e718961ce6ef9fa7745102ae015f5a3e/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`Theme color: `}
</RadixThemesText>
  <Select__root_0d46964b4d629be599dfa346e8c6d11d/>
</RadixThemesFlex>
  <RadixThemesText as={`p`} size={`1`}>
  {`You can edit this page in `}
  <RadixThemesCode>
  {`{your_app}/pages/settings.py`}
</RadixThemesCode>
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger css={{"backgroundColor": "var(--accent-1)", "border": "1px solid var(--accent-12)", "borderRadius": "0.375rem"}}>
  <LucideMenuIcon css={{"color": "var(--accent-10)"}} size={36}>
  {`menu`}
</LucideMenuIcon>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/`} passHref={true}>
  {`Home`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/dashboard`} passHref={true}>
  {`Dashboard`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`/settings`} passHref={true}>
  {`Settings`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Separator/>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`https://github.com/reflex-dev`} passHref={true}>
  {`About`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"&:hover": {"color": "var(--accent-1)", "backgroundColor": "var(--accent-10)"}}}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "color": "inherit"}}>
  <NextLink href={`mailto:founders@=reflex.dev`} passHref={true}>
  {`Contact`}
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesTheme>
  )
}

export function Switch_e718961ce6ef9fa7745102ae015f5a3e () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, colorMode, toggleColorMode])

  return (
    <RadixThemesSwitch checked={((colorMode) !== ("light"))} onCheckedChange={on_change_9922dd3e837b9e087c86a2522c2c93f8}/>
  )
}

export function Select__root_0d46964b4d629be599dfa346e8c6d11d () {
  const state__theme_state = useContext(StateContexts.state__theme_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_8ea333b9c7805c23e88b7120357a9d71 = useCallback((_e0) => addEvents([Event("state.theme_state.set_accent_color", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesSelect.Root onValueChange={on_change_8ea333b9c7805c23e88b7120357a9d71} value={state__theme_state.accent_color}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`tomato`}>
  {`tomato`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`red`}>
  {`red`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`ruby`}>
  {`ruby`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`crimson`}>
  {`crimson`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`pink`}>
  {`pink`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`plum`}>
  {`plum`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`purple`}>
  {`purple`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`violet`}>
  {`violet`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`iris`}>
  {`iris`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`indigo`}>
  {`indigo`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`blue`}>
  {`blue`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`cyan`}>
  {`cyan`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`teal`}>
  {`teal`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`jade`}>
  {`jade`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`green`}>
  {`green`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`grass`}>
  {`grass`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`brown`}>
  {`brown`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`orange`}>
  {`orange`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`sky`}>
  {`sky`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`mint`}>
  {`mint`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`lime`}>
  {`lime`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`yellow`}>
  {`yellow`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`amber`}>
  {`amber`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`gold`}>
  {`gold`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`bronze`}>
  {`bronze`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`gray`}>
  {`gray`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
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


export function Link_97e05143123d6b32b753a76522f5f1bb () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/home")) || ((((state.router.page.path) === ("/")) && ("Home")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Home`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_be14b499d5139557daf41bf5bb5f5928 () {
  const state = useContext(StateContexts.state)


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}}>
  <NextLink href={`/dashboard`} passHref={true}>
  <RadixThemesFlex align={`center`} css={{"background": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `var(--accent-1)` : `transparent`, "color": isTrue((((state.router.page.path) === ("/dashboard")) || ((((state.router.page.path) === ("/")) && ("Dashboard")) === ("Home")))) ? `var(--accent-10)` : `var(--gray-11)`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`row`} gap={`2`}>
  <img css={{"height": "2.5em", "padding": "0.5em"}} src={`/github.svg`}/>
  <RadixThemesText as={`p`}>
  {`Dashboard`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

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

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <Theme_6ec0010d93e9af15e92bc9e6d0bbaea0/>
  <NextHead>
  <title>
  {`Settings`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
