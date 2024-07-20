import { k } from "vite/dist/node/types.d-aGj9QkWt";
import { Sheet } from "../types";

export class CommonSheet implements Sheet{
    key: string
    name: string
    route: string
    show: boolean 
    icon?: string

    constructor(key:string, name: string, icon: string, route?: string) {
        this.key = key
        this.name = name
        this.route = route ? route : key
        this.show = false
        this.icon = icon
    }

}