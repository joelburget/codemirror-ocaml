open Brr

let () =
 let parent = (Document.body G.document) in
 let _ : Codemirror_view.EditorView.t = Codemirror_view.EditorView.(create (opts parent)) in
 ()
