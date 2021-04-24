(lang dune 2.8)

(name codemirror)

(version 0.0.1)

(generate_opam_files true)

(license ISC)

(authors "Joel Burget")

(maintainers "joelburget@gmail.com")

(package
 (name codemirror-text)
 (synopsis "Bindings for @codemirror/text")
 (description "TODO")
 (depends
  (brr
   (>= 0.0.1))))

(package
 (name codemirror-state)
 (synopsis "Bindings for @codemirror/state")
 (description "TODO")
 (depends
  (brr
   (>= 0.0.1))))

(package
 (name codemirror-view)
 (synopsis "Bindings for @codemirror/view")
 (description "TODO")
 (depends
  (brr
   (>= 0.0.1))))
