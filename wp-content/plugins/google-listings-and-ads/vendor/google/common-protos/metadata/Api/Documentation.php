<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/documentation.proto

namespace GPBMetadata\Google\Api;

class Documentation
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
google/api/documentation.proto
google.api"�
Documentation
summary (	
pages (2.google.api.Page,
rules (2.google.api.DocumentationRule
documentation_root_url (	
service_root_url (	
overview (	"[
DocumentationRule
selector (	
description (	
deprecation_description (	"I
Page
name (	
content (	"
subpages (2.google.api.PageBt
com.google.apiBDocumentationProtoPZEgoogle.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig�GAPIbproto3'
        , true);

        static::$is_initialized = true;
    }
}

