<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v16/errors/geo_target_constant_suggestion_error.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V16\Errors;

class GeoTargetConstantSuggestionError
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
Jgoogle/ads/googleads/v16/errors/geo_target_constant_suggestion_error.protogoogle.ads.googleads.v16.errors"�
$GeoTargetConstantSuggestionErrorEnum"�
 GeoTargetConstantSuggestionError
UNSPECIFIED 
UNKNOWN
LOCATION_NAME_SIZE_LIMIT
LOCATION_NAME_LIMIT
INVALID_COUNTRY_CODE
REQUEST_PARAMETERS_UNSETB�
#com.google.ads.googleads.v16.errorsB%GeoTargetConstantSuggestionErrorProtoPZEgoogle.golang.org/genproto/googleapis/ads/googleads/v16/errors;errors�GAA�Google.Ads.GoogleAds.V16.Errors�Google\\Ads\\GoogleAds\\V16\\Errors�#Google::Ads::GoogleAds::V16::Errorsbproto3'
        , true);
        static::$is_initialized = true;
    }
}

