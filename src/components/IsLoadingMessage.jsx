function IsLoadingMessage({ isLoading }) {
  return (
    <>
        { isLoading && <h2>Cargando...</h2> }
    </>
  )
}

export { IsLoadingMessage };