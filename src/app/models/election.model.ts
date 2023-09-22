export interface elections {
  elections: election[]
}
export interface election {
  name: string,
  details: string,
  stages: stage[],
  comments: comment[],
}
export interface stage {
  title: string,
  elements: stageElement[],
  comments: comment[],
}
export interface stageElement {
  title: string,
  picture: string,
  details: string,
  links: link[],
  frames: link[],
  footer: string,
}
export interface link {
  label: string,
  url: string,
}
export interface comment {
  username: string,
  comment: string
}
