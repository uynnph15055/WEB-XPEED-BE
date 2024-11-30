<?php
namespace Aws\ResilienceHub;

use Aws\AwsClient;

/**
 * This client is used to interact with the **AWS Resilience Hub** service.
 * @method \Aws\Result acceptResourceGroupingRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise acceptResourceGroupingRecommendationsAsync(array $args = [])
 * @method \Aws\Result addDraftAppVersionResourceMappings(array $args = [])
 * @method \GuzzleHttp\Promise\Promise addDraftAppVersionResourceMappingsAsync(array $args = [])
 * @method \Aws\Result batchUpdateRecommendationStatus(array $args = [])
 * @method \GuzzleHttp\Promise\Promise batchUpdateRecommendationStatusAsync(array $args = [])
 * @method \Aws\Result createApp(array $args = [])
 * @method \GuzzleHttp\Promise\Promise createAppAsync(array $args = [])
 * @method \Aws\Result createAppVersionAppComponent(array $args = [])
 * @method \GuzzleHttp\Promise\Promise createAppVersionAppComponentAsync(array $args = [])
 * @method \Aws\Result createAppVersionResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise createAppVersionResourceAsync(array $args = [])
 * @method \Aws\Result createRecommendationTemplate(array $args = [])
 * @method \GuzzleHttp\Promise\Promise createRecommendationTemplateAsync(array $args = [])
 * @method \Aws\Result createResiliencyPolicy(array $args = [])
 * @method \GuzzleHttp\Promise\Promise createResiliencyPolicyAsync(array $args = [])
 * @method \Aws\Result deleteApp(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteAppAsync(array $args = [])
 * @method \Aws\Result deleteAppAssessment(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteAppAssessmentAsync(array $args = [])
 * @method \Aws\Result deleteAppInputSource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteAppInputSourceAsync(array $args = [])
 * @method \Aws\Result deleteAppVersionAppComponent(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteAppVersionAppComponentAsync(array $args = [])
 * @method \Aws\Result deleteAppVersionResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteAppVersionResourceAsync(array $args = [])
 * @method \Aws\Result deleteRecommendationTemplate(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteRecommendationTemplateAsync(array $args = [])
 * @method \Aws\Result deleteResiliencyPolicy(array $args = [])
 * @method \GuzzleHttp\Promise\Promise deleteResiliencyPolicyAsync(array $args = [])
 * @method \Aws\Result describeApp(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppAsync(array $args = [])
 * @method \Aws\Result describeAppAssessment(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppAssessmentAsync(array $args = [])
 * @method \Aws\Result describeAppVersion(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppVersionAsync(array $args = [])
 * @method \Aws\Result describeAppVersionAppComponent(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppVersionAppComponentAsync(array $args = [])
 * @method \Aws\Result describeAppVersionResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppVersionResourceAsync(array $args = [])
 * @method \Aws\Result describeAppVersionResourcesResolutionStatus(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppVersionResourcesResolutionStatusAsync(array $args = [])
 * @method \Aws\Result describeAppVersionTemplate(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeAppVersionTemplateAsync(array $args = [])
 * @method \Aws\Result describeDraftAppVersionResourcesImportStatus(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeDraftAppVersionResourcesImportStatusAsync(array $args = [])
 * @method \Aws\Result describeResiliencyPolicy(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeResiliencyPolicyAsync(array $args = [])
 * @method \Aws\Result describeResourceGroupingRecommendationTask(array $args = [])
 * @method \GuzzleHttp\Promise\Promise describeResourceGroupingRecommendationTaskAsync(array $args = [])
 * @method \Aws\Result importResourcesToDraftAppVersion(array $args = [])
 * @method \GuzzleHttp\Promise\Promise importResourcesToDraftAppVersionAsync(array $args = [])
 * @method \Aws\Result listAlarmRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAlarmRecommendationsAsync(array $args = [])
 * @method \Aws\Result listAppAssessmentComplianceDrifts(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppAssessmentComplianceDriftsAsync(array $args = [])
 * @method \Aws\Result listAppAssessmentResourceDrifts(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppAssessmentResourceDriftsAsync(array $args = [])
 * @method \Aws\Result listAppAssessments(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppAssessmentsAsync(array $args = [])
 * @method \Aws\Result listAppComponentCompliances(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppComponentCompliancesAsync(array $args = [])
 * @method \Aws\Result listAppComponentRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppComponentRecommendationsAsync(array $args = [])
 * @method \Aws\Result listAppInputSources(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppInputSourcesAsync(array $args = [])
 * @method \Aws\Result listAppVersionAppComponents(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppVersionAppComponentsAsync(array $args = [])
 * @method \Aws\Result listAppVersionResourceMappings(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppVersionResourceMappingsAsync(array $args = [])
 * @method \Aws\Result listAppVersionResources(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppVersionResourcesAsync(array $args = [])
 * @method \Aws\Result listAppVersions(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppVersionsAsync(array $args = [])
 * @method \Aws\Result listApps(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listAppsAsync(array $args = [])
 * @method \Aws\Result listRecommendationTemplates(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listRecommendationTemplatesAsync(array $args = [])
 * @method \Aws\Result listResiliencyPolicies(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listResiliencyPoliciesAsync(array $args = [])
 * @method \Aws\Result listResourceGroupingRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listResourceGroupingRecommendationsAsync(array $args = [])
 * @method \Aws\Result listSopRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listSopRecommendationsAsync(array $args = [])
 * @method \Aws\Result listSuggestedResiliencyPolicies(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listSuggestedResiliencyPoliciesAsync(array $args = [])
 * @method \Aws\Result listTagsForResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listTagsForResourceAsync(array $args = [])
 * @method \Aws\Result listTestRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listTestRecommendationsAsync(array $args = [])
 * @method \Aws\Result listUnsupportedAppVersionResources(array $args = [])
 * @method \GuzzleHttp\Promise\Promise listUnsupportedAppVersionResourcesAsync(array $args = [])
 * @method \Aws\Result publishAppVersion(array $args = [])
 * @method \GuzzleHttp\Promise\Promise publishAppVersionAsync(array $args = [])
 * @method \Aws\Result putDraftAppVersionTemplate(array $args = [])
 * @method \GuzzleHttp\Promise\Promise putDraftAppVersionTemplateAsync(array $args = [])
 * @method \Aws\Result rejectResourceGroupingRecommendations(array $args = [])
 * @method \GuzzleHttp\Promise\Promise rejectResourceGroupingRecommendationsAsync(array $args = [])
 * @method \Aws\Result removeDraftAppVersionResourceMappings(array $args = [])
 * @method \GuzzleHttp\Promise\Promise removeDraftAppVersionResourceMappingsAsync(array $args = [])
 * @method \Aws\Result resolveAppVersionResources(array $args = [])
 * @method \GuzzleHttp\Promise\Promise resolveAppVersionResourcesAsync(array $args = [])
 * @method \Aws\Result startAppAssessment(array $args = [])
 * @method \GuzzleHttp\Promise\Promise startAppAssessmentAsync(array $args = [])
 * @method \Aws\Result startResourceGroupingRecommendationTask(array $args = [])
 * @method \GuzzleHttp\Promise\Promise startResourceGroupingRecommendationTaskAsync(array $args = [])
 * @method \Aws\Result tagResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise tagResourceAsync(array $args = [])
 * @method \Aws\Result untagResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise untagResourceAsync(array $args = [])
 * @method \Aws\Result updateApp(array $args = [])
 * @method \GuzzleHttp\Promise\Promise updateAppAsync(array $args = [])
 * @method \Aws\Result updateAppVersion(array $args = [])
 * @method \GuzzleHttp\Promise\Promise updateAppVersionAsync(array $args = [])
 * @method \Aws\Result updateAppVersionAppComponent(array $args = [])
 * @method \GuzzleHttp\Promise\Promise updateAppVersionAppComponentAsync(array $args = [])
 * @method \Aws\Result updateAppVersionResource(array $args = [])
 * @method \GuzzleHttp\Promise\Promise updateAppVersionResourceAsync(array $args = [])
 * @method \Aws\Result updateResiliencyPolicy(array $args = [])
 * @method \GuzzleHttp\Promise\Promise updateResiliencyPolicyAsync(array $args = [])
 */
class ResilienceHubClient extends AwsClient {}