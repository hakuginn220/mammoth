import { Record } from 'immutable'

export const Account = Record({
  id: 0,
  username: '',
  acct: '',
  display_name: '',
  locked: true,
  created_at: '',
  followers_count: 0,
  following_count: 0,
  statuses_count: 0,
  note: '',
  url: '',
  avatar: '',
  avatar_static: '',
  header: '',
  header_static: ''
})

export const Application = Record({
  name: '',
  website: null
})

export const Attachment = Record({
  id: 0,
  type: '',
  url: '',
  remote_url: null,
  preview_url: '',
  text_url: null
})

export const Card = Record({
  url: '',
  title: '',
  description: '',
  image: null
})

export const Context = Record({
  ancestors: [],
  descendants: []
})

export const Error = Record({
  error: ''
})

export const Instance = Record({
  uri: '',
  title: '',
  description: '',
  email: '',
  version: null
})

export const Mention = Record({
  url: '',
  username: '',
  acct: '',
  id: 0
})

export const Notification = Record({
  id: 0,
  type: '',
  created_at: '',
  account: {},
  status: null
})

export const Relationship = Record({
  id: 0,
  following: '',
  followed_by: '',
  blocking: '',
  muting: '',
  requested: ''
})

export const Report = Record({
  id: 0,
  action_taken: ''
})

export const Results = Record({
  accounts: null,
  statuses: null,
  hashtags: null
})

export const Status = Record({
  id: 0,
  uri: '',
  url: '',
  account: '',
  in_reply_to_id: null,
  in_reply_to_account_id: null,
  reblog: null,
  content: '',
  created_at: '',
  reblogs_count: 0,
  favourites_count: 0,
  reblogged: null,
  favourited: null,
  sensitive: null,
  spoiler_text: '',
  visibility: '',
  media_attachments: [],
  mentions: [],
  tags: [],
  application: {}
})

export const Tag = Record({
  name: '',
  url: ''
})

// There is no document
export const Apps = Record({
  id: 0,
  redirect_uri: '',
  client_id: '',
  client_secret: ''
})

// There is no document
export const AccessToken = Record({
  access_token: '',
  token_type: '',
  scope: '',
  created_at: 0
})
