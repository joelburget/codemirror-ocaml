(* open Brr *)

type t = Jv.t

include (Jv.Id : Jv.CONV with type t := t)

let from line = Jv.Int.get line "from"
let to' line = Jv.Int.get line "to"
let number line = Jv.Int.get line "number"
let length line = Jv.Int.get line "length"
let text line = Jv.Jstr.get line "text" |> Jstr.to_string
