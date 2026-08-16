const useState = <T> (InitialValue: T) : [T, (newValue : T) => void]  => {
    let value = InitialValue
    let setValue = (newValue : T) => value = newValue
    return [value,setValue ]
}
useState<string>("")
useState<number>(1)

interface user {
    email : string,
    isLogging: boolean,
}
useState<user>({email : " ", isLogging : false})
useState<user | null>(null)