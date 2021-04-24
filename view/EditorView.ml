type t = Jv.t

include (Jv.Id : Jv.CONV with type t := t)

let editor_view = Jv.get Jv.global "EditorView"

type viewport = { from : int; to': int }

type opts = Jv.t
let opts el = Jv.obj [| "parent", Brr.El.to_jv el |]

let create opts = Jv.new' editor_view [| opts |]
