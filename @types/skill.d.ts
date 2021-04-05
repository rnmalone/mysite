export type ISkillNode = {
    id: string;
    display: SkillIcon | SkillImage;
    name: string;
}

export type SkillImage = {
    url: string;
}

export type SkillIcon = {
    color: string;
    icon: string;
}


export enum SkillDisplayType {
    Icon = 'icon',
    Image = 'img'
}
