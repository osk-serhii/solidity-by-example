import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"
import { Link } from "react-router-dom"

interface Path {
  title: string
  path: string
}

interface Props {
  title: string
  description: string
  version: "0.8.13"
  html: string
  prev: Path | null
  next: Path | null
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  html,
  prev,
  next,
}) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Solidity by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={html} />

        <div className={styles.prevNext}>
          {prev && (
            <Link to={prev.path}>
              {`< `}
              {prev.title}
            </Link>
          )}
          {next && (
            <Link to={next.path}>
              {next.title}
              {` >`}
            </Link>
          )}
        </div>

        <p>
          Try on{" "}
          <a href="https://remix.ethereum.org" target="__blank">
            Remix
          </a>
        </p>
      </div>
    </div>
  )
}

export default Example
