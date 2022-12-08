export interface IWork {
    date: string
    link: string
    name: string
    technology: string[]
}

export interface IMain {
    title: string
    subtitle: string
    text: string
    glitch: string
}

export type Text = {
    list?: string[]
    text: string
    link?: {
        text: string
        link: string
    }
}

export interface IAbout {
    title: string
    text: Text[]
}

export interface ISkills {
    title: string
    text: Text[]
}

export interface IWorks {
    title: string
    works: IWork[]
}


export type Data = {
    main: IMain
    about: IAbout
    skills: ISkills
    works: IWorks
}

export interface IStore {
    data: Data | null
    main: IMain | null
    about: IAbout | null
    skills: ISkills | null
    works: IWorks | null
    skipIntro: boolean
    sound: boolean
}
