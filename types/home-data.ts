export default interface IHomeData {
    hero: {
        pretext: string,
        name: string,
        subname: string,
        subtext: string,
    },
    about: {
        body: string[],
    },
    experience: {
        jobTitle: string,
        date: {
            start: string,
            end: string,
        },
        company: {
            name: string,
            location: string,
            url: string,
        },
        description: string[],
    }[],
    project: {
        url: string,
        title: string,
        subtitle: string,
        content: string,
        topics: string[],
    }[],
    skills: {
        title: string,
        content: string,
    }[]
}