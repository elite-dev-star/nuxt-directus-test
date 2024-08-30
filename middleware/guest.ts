export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token_expired, checkAutoRefresh } = useDirectusToken();

  await checkAutoRefresh();

  if (!token_expired.value) {
      return navigateTo('/dashboard');
  }
})
