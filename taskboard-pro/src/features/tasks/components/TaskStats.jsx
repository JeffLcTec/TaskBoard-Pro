import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskStats({ stats }) {
  const { SECTION, H3, P } = HTML_TAGS
  return (
    <SECTION>
      <H3>Estadísticas</H3>
      <P>Total: {stats.total}</P>
      <P>Completadas: {stats.completed}</P>
      <P>Pendientes: {stats.pending}</P>
    </SECTION>
  )
}