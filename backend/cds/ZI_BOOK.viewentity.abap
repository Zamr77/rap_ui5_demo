@EndUserText.label: 'Book List View'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@UI: {
  headerInfo: {
    typeName: 'Book',
    typeNamePlural: 'Books'
  }
}
define root view entity ZI_BOOK as select from zbook
{
  key id,
  title,
  author,
  published_year
}