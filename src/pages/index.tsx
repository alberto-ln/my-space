import "../styles/index.css";
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = ({data}) => {
  const { info }  = data;
  return (
    <div className={"container l-home"}>
      <div className="m-profile">
          <div className="profile__w-photo">
          <StaticImage width={200} height={200} imgClassName={"profile__photo-img"} className={"profile__photo"} src="./../images/profile.png" alt={`Foto de ${info.title}`} />
          </div>
        <h1 className={"title-h1"} >{info.title}</h1>
        <p >{info.description}</p>
          <div className="m-buttons">
              <ul className="buttons__list">
                  {info.buttons.map((button, index) => (
                      <li key={index} className="buttons__item">
                          <a target={"_blank"} rel={"noopener"} className={"button"} href={`${button.url}`}>{button.name}</a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
      <div className="m-socials">
          <i className="fa-brands fa-tiktok"></i>
            <ul className="socials__list">
                {info.socials.map((social, index) => (
                    <li key={index} className="socials__item">
                        <a target={"_blank"} rel={"noopener"} href={`${social.url}`}>{social.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = ({data}) =>
    <>
        <title>{data.info.title}</title>
        <meta name="description" content={`${data.info.description}`} />
    </>

export const query = graphql`
    query  {
      info: dataJson {
        title
        description
        socials {
          name
          url
        }
        buttons {
          name
          url
        }
      }
  }
`