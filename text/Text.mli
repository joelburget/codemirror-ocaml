type t

include Jv.CONV with type t := t

val length : t -> int
val lines : t -> int
val line_at : t -> int -> Line.t
val line : t -> int -> Line.t
