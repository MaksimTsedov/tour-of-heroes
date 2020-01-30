export class Skill {
    constructor(initializer?: {
        naming?: string,
        description?: string,
        level?: number
    }) {
        if (initializer) Object.assign(this, initializer);
    }
    id: number;
    naming: string;
    description: string;
    level?: number;
}
