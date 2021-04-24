type t = Jv.t

include (Jv.Id : Jv.CONV with type t := t)

let length text = Jv.Int.get text "length"
let lines text = Jv.Int.get text "lines"
let line_at text pos = Jv.call text "lineAt" [| Jv.of_int pos |] |> Line.of_jv
let line text n = Jv.call text "lineAt" [| Jv.of_int n |] |> Line.of_jv
