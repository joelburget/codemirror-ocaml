type t

include Jv.CONV with type t := t

val from : t -> int
val to' : t -> int
val number : t -> int
val length : t -> int
val text : t -> string
