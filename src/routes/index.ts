export class AppRoutes {
  //AUTH
  static auth = '/auth';
  static login = `${AppRoutes.auth}/login`;
  static signup = `${AppRoutes.auth}/signup`;
  static resetPassword = `${AppRoutes.auth}/reset-password`;
  static forgotPassword = `${AppRoutes.auth}/forgot-password`;

  //ONBOARDING
  static onboarding = '/onboarding';



  //DASHBOARD
  static dashboard = '/';

}