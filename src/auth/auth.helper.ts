import { Injectable } from "@nestjs/common"
import { CASLActions } from "src/casl/ablity.factory"

@Injectable()
export class AuthHelpers {
    getResourceName(url: string, method: string) {
        const paths = url.split("/").slice(1)
        if (paths.length === 1) {
            return paths[0]
        } else {
            if (method === "PATCH" || method === "DELETE") {
                return paths.slice(0, paths.length - 1).join("_")
            } else {
                return paths.join("_")
            }
        }
    }

    getAbilityAction(method: string) {
        switch (method) {
            case "GET":
                return CASLActions.Read
            case "POST":
                return CASLActions.Create
            case "PATCH":
                return CASLActions.Update
            case "DELETE":
                return CASLActions.Delete
        }
    }
}