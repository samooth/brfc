import { Hash } from 'bsv2'

const brfc = (title, authors, version) => {
  const autorString = authors.join(', ').trim()
  const stringToHash = [
    title.trim() +
    autorString +
    (version.toString() || '')
  ].join('').trim()

  let hash = Hash.sha256Sha256(
    Buffer.from(stringToHash)
  )
  hash = hash.reverse()

  return hash.toString('hex').substring(0, 12)
}

export { brfc }
